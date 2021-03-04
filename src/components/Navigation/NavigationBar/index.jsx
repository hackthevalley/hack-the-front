import Section from '@htv/ui-kit/components/Section';
import classNames from 'classnames';
import { container, section, sectionBefore, sectionCenter, sectionAfter } from './NavigationBar.module.scss';

export default function NavigationBar({
    className,
    before,
    center,
    after,
    ...props
}) {
    return (
        <Section
            {...props}
            className={classNames(
                className,
                container,
            )}
        >
            {before && (
                <div className={classNames(section, sectionBefore)}>
                    {before}
                </div>
            )}
            {center && (
                <div className={classNames(section, sectionCenter)}>
                    {center}
                </div>
            )}
            {after && (
                <div className={classNames(section, sectionAfter)}>
                    {after}
                </div>
            )}
        </Section>
    );
}