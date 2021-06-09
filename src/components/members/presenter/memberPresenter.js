export const setMembersDatas = (argonauts) => {
  return {
    argonauts,
    normalize,
  };
};

export const normalize = (argonauts) => {
  const randomGroup = Math.ceil(Math.random() * 3);
  return argonauts.map((argonaut, index) => {
    return {
      ...argonaut,
      group: index >= 1 && index <= 3 ? index : randomGroup,
    };
  });
};
