// import App from 'next/app'

import { AuthProvider } from "../components/auth/auth"

import 'mdbreact/dist/css/mdb.css'
import './main.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from "react-toastify"

function MyApp({ Component, pageProps }) {
    return <AuthProvider>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        <Component {...pageProps} />

        <ToastContainer />

    </AuthProvider>
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp