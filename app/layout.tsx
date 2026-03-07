"use client"
import './globals.css'
import TopBar from "./component/ux/TopBar";
import Sliders from "./component/ux/Sliders";
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useAppSelector } from './hooks';
import ReduxProvider from './layoutsConfig/Provider';
import LayoutContent from './layoutsConfig/LayoutContent';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="antialiased">
      <ReduxProvider> 
        <LayoutContent>
          {children}
        </LayoutContent>
      </ReduxProvider>
      </body>
    </html>
  );
}