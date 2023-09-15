import LinkWithRef from 'next-intl/link';
import { Ref, forwardRef } from 'react';

const LinkBehaviour = forwardRef((props: { href: string }, ref: unknown) => (
  <LinkWithRef ref={ref as Ref<HTMLAnchorElement>} {...props} />
));

LinkBehaviour.displayName = 'LinkBehaviour';

export default LinkBehaviour;
