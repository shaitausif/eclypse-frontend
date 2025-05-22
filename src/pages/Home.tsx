import Customers from "../components/Customers"
import DropBox from "../components/DropBox"
import Footer from "../components/Footer"
import GridSection from "../components/GridSection"
import Main from "../components/Main"
import Product from "../components/Product"


const home = () => {
  return (
    <>
    <section id="main">
        <Main/>
    </section>
    <section>
        <GridSection/>
    </section>
    <section>
        <Product/>
    </section>
    <section>
        <DropBox/>
    </section>
    <section>
        <Customers/>
    </section>
    <footer>
      <Footer/>
    </footer>
    </>
  )
}

export default home
