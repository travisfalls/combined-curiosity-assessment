import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// The middle section and footer were more so thrown in for demonstration purposes. The Hero component was the main focus of the excercise.

// You can uncomment bgImage in the Hero component to see what it would look like to pass in a background image.

function App() {
  return (
    <>
      <Hero 
        bgColor="#224290" 
        bgImage="https://cdn.pixabay.com/photo/2021/11/23/13/32/forest-6818683_960_720.jpg"
      />
      <section>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim justo ut turpis condimentum, at ullamcorper risus ultricies. Praesent sit amet turpis luctus, consectetur nisi vel, gravida magna. Mauris tempor lectus ante, ut porta massa pharetra id. Proin eget lacus semper, accumsan nulla nec, condimentum massa. Curabitur mollis ipsum sed ex hendrerit blandit. Pellentesque venenatis nunc vitae leo cursus sollicitudin. Sed mollis eros ligula, a finibus erat dignissim ut. Integer in ipsum vulputate, sodales sapien accumsan, condimentum sem. Maecenas malesuada mauris erat, imperdiet porttitor ligula imperdiet vel. Suspendisse dignissim massa id risus consectetur, ut eleifend nisl lobortis. Phasellus risus erat, pretium quis lorem non, pretium euismod nibh. Pellentesque non venenatis sem. Sed tincidunt pretium aliquet. Maecenas sodales blandit lorem. Mauris a elit id est sodales faucibus.</p>
      </section>
      <Footer bgColor="#ff7645" />
    </>
  );
}

export default App;
