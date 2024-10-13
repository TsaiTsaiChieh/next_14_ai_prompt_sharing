"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";
import { getProviders, signIn, signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

const Nav = () => {
  const { data: session, status } = useSession();
  const [provider, setProvider] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const offDropdown = () => setToggleDropdown(false);

  useEffect(() => {
    const setupProviders = async () => {
      const res = await getProviders();
      setProvider(res);
    };
    if (status === "authenticated") setupProviders();
  }, [status]);

  return (
    <nav className={`flex-between ${styles.nav}`}>
      <Link href='/' className={`flex-center ${styles.nav__logoContainer}`}>
        <Image
          src='/assets/images/logo.svg'
          className={styles.nav__logoImage}
          alt='Promptopia Logo'
          width={30}
          height={30}
          onClick={offDropdown}
        ></Image>
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className={styles.nav__desktopContainer}>
        {session?.user ? (
          <div className={styles.nav__userActions}>
            <Link href='create-prompt' className='black_btn'>
              Create Prompt
            </Link>
            <button type='button' className='outline_btn' onClick={signOut}>
              Sign Out
            </button>
            <Link href='/profile'>
              <Image
                className={styles.nav__profileImage}
                src={session?.user.image}
                alt='profile'
                width={37}
                height={37}
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map(provider => (
                <button
                  type='button'
                  key={provider.name}
                  className='black_btn'
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  {`Sign In with ${provider.name}`}
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className={styles.nav__mobileContainer}>
        {session?.user ? (
          <div className={styles.nav__mobileUser}>
            <Image
              className={styles.nav__profileImage}
              src={session?.user.image}
              alt='profile'
              width={37}
              height={37}
              onClick={() => setToggleDropdown(prev => !prev)}
            ></Image>
            {toggleDropdown && (
              <div className={styles.nav__dropdown}>
                <Link
                  href='/profile'
                  className={styles.nav__dropdownLink}
                  onClick={offDropdown}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className={styles.nav__dropdownLink}
                  onClick={offDropdown}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  className='black_btn'
                  onClick={offDropdown && signOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map(provider => (
                <button
                  type='button'
                  key={provider.name}
                  className={`black_btn ${styles.nav__mobileSignOut}`}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  {`Sign In with ${provider.name}`}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
