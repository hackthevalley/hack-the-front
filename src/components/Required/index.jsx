import { required } from './Required.module.scss';

export default function Required({ children, className }) {
  return (
    <span className={className}>
      {children}
      <span className={required}>*</span>
    </span>
  );
}
