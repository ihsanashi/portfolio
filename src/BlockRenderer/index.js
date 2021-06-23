import BlockContent from '@sanity/block-content-to-react';

export const BlockRenderer = (props) => {
  const { style = 'normal' } = props.node;

  if (style === 'h5') {
    return (
      <h5 className='font-sans text-2xl leading-relaxed text-gray-800'>
        {props.children}
      </h5>
    );
  }

  if (style === 'h6') {
    return (
      <h6 className='font-sans text-xl text-gray-700'>{props.children}</h6>
    );
  }

  if (style === 'p') {
    return (
      <p className='leading-relaxed font-normal text-base text-gray-700 my-7.5'>
        {props.children}
      </p>
    );
  }

  if (style === 'blockquote') {
    return <blockquote>- {props.children}</blockquote>;
  }

  // Fall back to default handling
  return BlockContent.defaultSerializers.types.block(props);
};
