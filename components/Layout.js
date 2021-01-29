import React, { Fragment } from "react"
import Nav from "./Nav"
import Header from "./Header"
import styles from "../styles/Layout.module.css"

function Layout({ children }) {
  return (
    <Fragment>
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </Fragment>
  )
}

export default Layout
