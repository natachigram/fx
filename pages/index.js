import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>FX</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/* header section */}

      <header>
        <div className={styles.headerText}>
          <h1>Invest today!</h1>
          <h4>Invest today!</h4>
          <p>
            The highest paying wealth management service provider on the market.
            Start investing today!
          </p>
        </div>
      </header>

      {/* quick link section */}

      <section className={styles.purchase}>
        <div className={styles.purchase__headerText}>
          <p>Purchase bitcoin</p>
          <h3>Quick Link to Purchase Bitcoin</h3>
        </div>
        <div className={styles.purchase__quickLinks}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </section>

      {/* how it works sections */}

      <section className={styles.howItWorks__section}>
        <div className={styles.howItWork}>
          <h2>How it works</h2>
          <p>
            FXOPTIONSGENIX Investments has been proud to help our clients pursue
            their financial goals while giving them more time to focus on what
            really matters in life. Everything we offer - from guidance, to
            powerful trading tools- is built around one thing, you! We boast a
            24 hours support on live chat,email, and in-person for one on one
            support - when you need it most.
          </p>
          <button className='signup__secondary'>
            Sign Up
            <svg
              width='28'
              height='16'
              viewBox='0 0 28 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9H27V7H0V9Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.4907 3.78398C18.3505 2.55293 16.7579 1.875 15.0001 1.875C13.2329 1.875 11.635 2.54883 10.5001 3.77227C9.35279 5.00918 8.79381 6.69023 8.92506 8.50547C9.18521 12.0867 11.9104 15 15.0001 15C18.0897 15 20.8102 12.0873 21.0745 8.50664C21.2075 6.70781 20.645 5.03027 19.4907 3.78398Z'
                  fill='#3671E9'
                />
                <path
                  d='M25.3123 28.125H4.68735C4.41738 28.1285 4.15003 28.0718 3.90475 27.959C3.65946 27.8462 3.44241 27.6801 3.26938 27.4728C2.88852 27.0176 2.735 26.3959 2.84867 25.7672C3.34321 23.0238 4.88657 20.7193 7.31235 19.1016C9.46743 17.6654 12.1973 16.875 14.9998 16.875C17.8024 16.875 20.5323 17.666 22.6873 19.1016C25.1131 20.7187 26.6565 23.0232 27.151 25.7666C27.2647 26.3953 27.1112 27.017 26.7303 27.4723C26.5573 27.6796 26.3403 27.8458 26.095 27.9587C25.8497 28.0716 25.5824 28.1284 25.3123 28.125Z'
                  fill='#3671E9'
                />
              </svg>
            </div>

            <div className={styles.textContent}>
              <h3>Create Account</h3>
              <p>
                Sign up as a new user with your personal details, which are safe
                and secure with us.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <svg
                width='30'
                height='30'
                viewBox='0 0 30 30'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.9988 21.25C15.6618 21.25 16.2977 20.9866 16.7665 20.5178C17.2354 20.0489 17.4988 19.413 17.4988 18.75C17.4988 18.087 17.2354 17.4511 16.7665 16.9822C16.2977 16.5134 15.6618 16.25 14.9988 16.25C14.3357 16.25 13.6999 16.5134 13.231 16.9822C12.7622 17.4511 12.4988 18.087 12.4988 18.75C12.4988 19.413 12.7622 20.0489 13.231 20.5178C13.6999 20.9866 14.3357 21.25 14.9988 21.25ZM22.4988 10C23.1618 10 23.7977 10.2634 24.2665 10.7322C24.7354 11.2011 24.9988 11.837 24.9988 12.5V25C24.9988 25.663 24.7354 26.2989 24.2665 26.7678C23.7977 27.2366 23.1618 27.5 22.4988 27.5H7.49878C6.83574 27.5 6.19985 27.2366 5.73101 26.7678C5.26217 26.2989 4.99878 25.663 4.99878 25V12.5C4.99878 11.837 5.26217 11.2011 5.73101 10.7322C6.19985 10.2634 6.83574 10 7.49878 10H8.74878V7.5C8.74878 5.8424 9.40726 4.25269 10.5794 3.08058C11.7515 1.90848 13.3412 1.25 14.9988 1.25C15.8195 1.25 16.6323 1.41166 17.3905 1.72575C18.1488 2.03984 18.8378 2.50022 19.4182 3.08058C19.9986 3.66095 20.4589 4.34994 20.773 5.10823C21.0871 5.86651 21.2488 6.67924 21.2488 7.5V10H22.4988ZM14.9988 3.75C14.0042 3.75 13.0504 4.14509 12.3471 4.84835C11.6439 5.55161 11.2488 6.50544 11.2488 7.5V10H18.7488V7.5C18.7488 6.50544 18.3537 5.55161 17.6504 4.84835C16.9472 4.14509 15.9933 3.75 14.9988 3.75Z'
                  fill='#3671E9'
                />
              </svg>
            </div>

            <div className={styles.textContent}>
              <h3>Safe & Secure</h3>
              <p>
                We take careful measures to ensure that your investment is as
                safe as possible. Our data storage provides an important
                security measure against theft or loss.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M22.5 23.25H2.25C1.85218 23.25 1.47064 23.092 1.18934 22.8107C0.908035 22.5294 0.75 22.1478 0.75 21.75V1.5C0.75 1.30109 0.829018 1.11032 0.96967 0.96967C1.11032 0.829018 1.30109 0.75 1.5 0.75C1.69891 0.75 1.88968 0.829018 2.03033 0.96967C2.17098 1.11032 2.25 1.30109 2.25 1.5V21.75H22.5C22.6989 21.75 22.8897 21.829 23.0303 21.9697C23.171 22.1103 23.25 22.3011 23.25 22.5C23.25 22.6989 23.171 22.8897 23.0303 23.0303C22.8897 23.171 22.6989 23.25 22.5 23.25Z'
                  fill='#3671E9'
                />
                <path
                  d='M7.3125 20.25H5.4375C4.98995 20.25 4.56073 20.0722 4.24426 19.7557C3.92779 19.4393 3.75 19.0101 3.75 18.5625V11.4375C3.75 10.9899 3.92779 10.5607 4.24426 10.2443C4.56073 9.92779 4.98995 9.75 5.4375 9.75H7.3125C7.76005 9.75 8.18928 9.92779 8.50574 10.2443C8.82221 10.5607 9 10.9899 9 11.4375V18.5625C9 19.0101 8.82221 19.4393 8.50574 19.7557C8.18928 20.0722 7.76005 20.25 7.3125 20.25Z'
                  fill='#3671E9'
                />
                <path
                  d='M14.0625 20.25H12.1875C11.7399 20.25 11.3107 20.0722 10.9943 19.7557C10.6778 19.4393 10.5 19.0101 10.5 18.5625V9.1875C10.5 8.73995 10.6778 8.31073 10.9943 7.99426C11.3107 7.67779 11.7399 7.5 12.1875 7.5H14.0625C14.5101 7.5 14.9393 7.67779 15.2557 7.99426C15.5722 8.31073 15.75 8.73995 15.75 9.1875V18.5625C15.75 19.0101 15.5722 19.4393 15.2557 19.7557C14.9393 20.0722 14.5101 20.25 14.0625 20.25Z'
                  fill='#3671E9'
                />
                <path
                  d='M20.7954 20.25H18.9204C18.4729 20.25 18.0436 20.0722 17.7272 19.7557C17.4107 19.4393 17.2329 19.0101 17.2329 18.5625V6.1875C17.2329 5.73995 17.4107 5.31073 17.7272 4.99426C18.0436 4.67779 18.4729 4.5 18.9204 4.5H20.7954C21.243 4.5 21.6722 4.67779 21.9887 4.99426C22.3051 5.31073 22.4829 5.73995 22.4829 6.1875V18.5625C22.4829 19.0101 22.3051 19.4393 21.9887 19.7557C21.6722 20.0722 21.243 20.25 20.7954 20.25Z'
                  fill='#3671E9'
                />
              </svg>
            </div>

            <div className={styles.textContent}>
              <h3>Deposit & Invest</h3>
              <p>
                Deposit and invest on a portfolio that suits you and monitor
                your investments grow on our easy-to-use platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* about section */}
      <section className={styles.about__section}>
        <div className={styles.about}>
          <h4>WHAT IS FXOPTIONSGENIX</h4>
          <h2>How it works</h2>
          <p>
            FXOPTIONSGENIX is one of the leading independent wealth management
            firms providing asset management services including crypto currency
            trading, stocks, Non farm payrolls, real estate and foreign
            exchanges. We also second in forex trading and financial management.
            We offer professional investment solutions for all our investors’
            needs. We have an impeccable success rate achieved by our unique
            trading system and our team of professional traders working round
            the clock. Thus, profit is always guaranteed.
          </p>
          <button className='signup__secondary'>
            Sign Up
            <svg
              width='28'
              height='16'
              viewBox='0 0 28 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M27.7071 8.70711C28.0976 8.31658 28.0976 7.68342 27.7071 7.29289L21.3431 0.928932C20.9526 0.538408 20.3195 0.538408 19.9289 0.928932C19.5384 1.31946 19.5384 1.95262 19.9289 2.34315L25.5858 8L19.9289 13.6569C19.5384 14.0474 19.5384 14.6805 19.9289 15.0711C20.3195 15.4616 20.9526 15.4616 21.3431 15.0711L27.7071 8.70711ZM0 9H27V7H0V9Z'
                fill='white'
              />
            </svg>
          </button>
        </div>
      </section>

      {/* why forex section */}

      <section className={styles.purchase}>
        <div className={styles.purchase__headerText}>
          <p>Purchase bitcoin</p>
          <h3>Quick Link to Purchase Bitcoin</h3>
          <p>
            Competitive advantages are conditions that allow a company or
            country to produce a good or service at equal value but at a lower
            price or in a more desirable fashion
          </p>
        </div>
        <div className={styles.purchase__quickLinks}>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
          <div className={styles.box}></div>
        </div>
      </section>
    </div>
  );
}
