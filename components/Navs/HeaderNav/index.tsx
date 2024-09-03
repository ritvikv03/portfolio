'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';
import { useTheme } from '@/app/themecontext';
import PDFViewer from '@/components/PDFViewer';

interface HeaderNavProps {
  value: string;
  href: string;
  id: number;
}

const HeaderNav: FC<HeaderNavProps> = ({ value, href }) => {
  const route: string = usePathname();
  const { theme } = useTheme();
  const [showPDF, setShowPDF] = useState(false);

  const handleLinkClick = (e: React.MouseEvent) => {
    if (href.endsWith('.pdf')) {
      e.preventDefault();
      setShowPDF(true);
    }
  };

  return (
    <div className={`h-full w-max relative ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <Link href={href} className="font-medium" onClick={handleLinkClick}>
        {value}
      </Link>
      <div
        className="bg-primaryColor absolute w-full h-1 top-[62px]"
        style={href === route ? { display: 'flex' } : { display: 'none' }}
      />
      {showPDF && <PDFViewer src={href} onClose={() => setShowPDF(false)} />}
    </div>
  );
};

export default HeaderNav;
