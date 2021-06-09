export const setMembersDatas = (argonauts) => {
  return {
    argonauts: normalize(argonauts),
    normalize,
  };
};

export const normalize = (argonauts) => {
  return argonauts.map((argonaut, index) => {
    const randomGroup = Math.ceil(Math.random() * 3);
    return {
      ...argonaut,
      group: randomGroup,
    };
  });
};
