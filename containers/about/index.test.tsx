import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutMe from '@/containers/about/index';
import { useTheme } from '@/app/themecontext';

jest.mock('@/app/themecontext', () => ({
  useTheme: jest.fn(),
}));

jest.mock('next/link', () => {
  const Link = ({ children, href }: { children: React.ReactNode; href: string }) => <a href={href}>{children}</a>;
  Link.displayName = 'Link';
  return Link;
});

jest.mock('next/image', () => {
  const Image = ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />;
  Image.displayName = 'Image';
  return Image;
});

describe('AboutMe component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly in light theme', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
    });

    render(<AboutMe />);

    expect(screen.getByLabelText('about-me')).toBeInTheDocument();
    expect(screen.getByLabelText('self-description')).toBeInTheDocument();
    expect(screen.getByAltText('hero image')).toBeInTheDocument();
  });

  it('should render correctly in dark theme', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'dark',
    });

    render(<AboutMe />);

    expect(screen.getByLabelText('about-me')).toBeInTheDocument();
    expect(screen.getByLabelText('self-description')).toBeInTheDocument();
    expect(screen.getByAltText('hero image')).toBeInTheDocument();
  });
});
