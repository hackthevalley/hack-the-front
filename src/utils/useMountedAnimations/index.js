import { useEffect, useState, useCallback, useRef } from 'react';

let _variables;
const loadVariables = async () => {
    if (!_variables) {
        _variables = await import('./useMountedAnimations.module.scss');
    }
    return _variables;
};

export default function useMountedAnimations(speed = `normal`, initState = false) {
    const [ s1, setS1 ] = useState(initState);
    const [ s2, setS2 ] = useState(initState);
    const speeds = useRef(_variables);

    useEffect(() => {
        if (speeds.current) return;
        (async () => {
            const _speeds = await loadVariables();
            speeds.current = _speeds;
        })();
    }, []);


    useEffect(() => {
        if (!speeds.current) {
            if (s2 !== s1) setS2(s1);
            return;
        }
        let frame, mounted = true;
        let duration = 0;
        if (!s1) {
            duration = parseInt(speeds.current[speed]);
        }
        const timeout = window.setTimeout(() => {
            frame = window.requestAnimationFrame(() => {
                if (mounted) setS2(s1);
            });
        }, duration + 10);

        return () => {
            window.clearTimeout(timeout);
            window.cancelAnimationFrame(frame);
            mounted = false;
        };
    }, [ s1, speed ]);

    const setState = useCallback(arg => {
        if (typeof arg === `function`) {
            arg = !!arg(s1);
        }
        setS1(arg);
    }, [ s1 ]);

    return {
        setState,
        isMounted: s1 || s2,
        isShown: s1 && s2,
    }
}