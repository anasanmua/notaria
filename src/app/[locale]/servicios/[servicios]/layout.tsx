interface LayoutProps {
  children: React.ReactNode;
}

const ServicesLayout = ({ children }: LayoutProps) => {
  return <section>{children}</section>;
};

export default ServicesLayout;
