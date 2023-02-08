const Section = ({ zIndex = 100, children }) => {
  return (
    <>
      {" "}
      {zIndex && (
        <div className="section" style={{ zIndex: zIndex }}>
          {children}
        </div>
      )}
      {!zIndex && <div className="section">{children}</div>}
    </>
  );
};

export default Section;
