import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@/components/Header/index';
import { useTheme } from '@/app/themecontext';

const mockHeaderNavs = [
  { value: 'About Me', id: 2, href: '/about' },
];

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

describe('Header component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly', () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      toggleTheme: jest.fn(),
    });

    render(<Header />);

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
    expect(screen.getByLabelText('menu button')).toBeInTheDocument();
    expect(screen.getByLabelText('theme toggle button')).toBeInTheDocument();
    mockHeaderNavs.forEach(nav => {
      expect(screen.getByText(nav.value)).toBeInTheDocument();
    });
  });

  it('should toggle theme', () => {
    const mockToggleTheme = jest.fn();
    (useTheme as jest.Mock).mockReturnValue({
      theme: 'light',
      toggleTheme: mockToggleTheme,
    });

    render(<Header />);

    const themeToggleButton = screen.getByLabelText('theme toggle button');
    fireEvent.click(themeToggleButton);

    expect(mockToggleTheme).toHaveBeenCalled();
  });
});
