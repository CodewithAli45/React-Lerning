import React, { useRef } from 'react'
import '../style/scroll.css'

export function ScrollDemo() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const productRef = useRef(null);
    const careerRef = useRef(null);

    const scrollSmoothly = (id) =>{
        if(id === 'home'){
            homeRef.current.scrollIntoView({
            behavior : "smooth",
            block : "start",
        });
        }
        else if(id === 'product'){
            productRef.current.scrollIntoView({
            behavior : "smooth",
            block : "start",
        });
        } else if(id === 'about'){
            aboutRef.current.scrollIntoView({
            behavior : "smooth",
            block : "start",
        });
        } else if(id === 'career'){
            console.log("career logging");
            careerRef.current.scrollIntoView({
            behavior : "smooth",
            block : "start",
        });
        }
        
    }
    
  return (
    <div>
      <section>
        <h1>Heading Section</h1>
        <ul className='navigation'>
            <li><a onClick={() => scrollSmoothly("home")} >Home</a> </li>
            <li><a onClick={() => scrollSmoothly("product")} >Producrs</a> </li>
            <li><a onClick={() => scrollSmoothly("about")}>About</a> </li>
            <li><a onClick={() => scrollSmoothly("career")} >Career</a> </li>
        </ul>
      </section>
      <section ref={homeRef}>
        <h1>Home</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptates? Tenetur quidem pariatur obcaecati magnam, consectetur laboriosam facere porro magni eligendi ab aut minima qui suscipit atque hic. Nobis, error.
        Aperiam maxime cum voluptates dolores ut odio ab officia sed, eos rerum. Earum cumque, harum nobis amet sed reiciendis dolores deserunt, tempore corporis corrupti nemo? Nihil delectus enim quos repudiandae.
        Iusto quibusdam animi ab rerum recusandae sapiente consequatur error, dolore at porro in minima aspernatur ratione magnam modi adipisci reprehenderit alias quod qui praesentium? Voluptatum suscipit optio velit culpa architecto!
        Eos facilis enim unde sequi? Corporis quisquam totam voluptates possimus fuga obcaecati doloribus illum in, dicta atque ab minus officiis, qui nostrum similique. Accusantium esse cum nisi aspernatur quaerat dolorem.
        Nulla quas necessitatibus aspernatur, ipsa esse nisi ipsam ullam quam, perspiciatis quo quia! Dolore, aperiam? Itaque animi consequatur alias porro natus doloribus ea commodi, officia recusandae! Voluptates ratione dolorum necessitatibus.
        Sit, aspernatur provident odit veritatis nihil dolor culpa temporibus eligendi, quam quaerat dolorem ut nam, voluptate aperiam perferendis rerum adipisci minima fuga expedita quia delectus? Id expedita amet aliquid molestias!
        Ipsam sunt debitis optio nobis culpa commodi corporis recusandae dolor assumenda neque vel ipsum, possimus quasi esse ab quo quia quisquam natus perspiciatis in ex iste placeat! Sint, veritatis odit?
        </p>
      </section>
      <section ref={productRef}>
        <h1>Products</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptates? Tenetur quidem pariatur obcaecati magnam, consectetur laboriosam facere porro magni eligendi ab aut minima qui suscipit atque hic. Nobis, error.
        Aperiam maxime cum voluptates dolores ut odio ab officia sed, eos rerum. Earum cumque, harum nobis amet sed reiciendis dolores deserunt, tempore corporis corrupti nemo? Nihil delectus enim quos repudiandae.
        Iusto quibusdam animi ab rerum recusandae sapiente consequatur error, dolore at porro in minima aspernatur ratione magnam modi adipisci reprehenderit alias quod qui praesentium? Voluptatum suscipit optio velit culpa architecto!
        Eos facilis enim unde sequi? Corporis quisquam totam voluptates possimus fuga obcaecati doloribus illum in, dicta atque ab minus officiis, qui nostrum similique. Accusantium esse cum nisi aspernatur quaerat dolorem.
        Nulla quas necessitatibus aspernatur, ipsa esse nisi ipsam ullam quam, perspiciatis quo quia! Dolore, aperiam? Itaque animi consequatur alias porro natus doloribus ea commodi, officia recusandae! Voluptates ratione dolorum necessitatibus.
        Sit, aspernatur provident odit veritatis nihil dolor culpa temporibus eligendi, quam quaerat dolorem ut nam, voluptate aperiam perferendis rerum adipisci minima fuga expedita quia delectus? Id expedita amet aliquid molestias!
        Ipsam sunt debitis optio nobis culpa commodi corporis recusandae dolor assumenda neque vel ipsum, possimus quasi esse ab quo quia quisquam natus perspiciatis in ex iste placeat! Sint, veritatis odit?
        </p>
      </section>
      <section ref={aboutRef}>
        <h1>About</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptates? Tenetur quidem pariatur obcaecati magnam, consectetur laboriosam facere porro magni eligendi ab aut minima qui suscipit atque hic. Nobis, error.
        Aperiam maxime cum voluptates dolores ut odio ab officia sed, eos rerum. Earum cumque, harum nobis amet sed reiciendis dolores deserunt, tempore corporis corrupti nemo? Nihil delectus enim quos repudiandae.
        Iusto quibusdam animi ab rerum recusandae sapiente consequatur error, dolore at porro in minima aspernatur ratione magnam modi adipisci reprehenderit alias quod qui praesentium? Voluptatum suscipit optio velit culpa architecto!
        Eos facilis enim unde sequi? Corporis quisquam totam voluptates possimus fuga obcaecati doloribus illum in, dicta atque ab minus officiis, qui nostrum similique. Accusantium esse cum nisi aspernatur quaerat dolorem.
        Nulla quas necessitatibus aspernatur, ipsa esse nisi ipsam ullam quam, perspiciatis quo quia! Dolore, aperiam? Itaque animi consequatur alias porro natus doloribus ea commodi, officia recusandae! Voluptates ratione dolorum necessitatibus.
        Sit, aspernatur provident odit veritatis nihil dolor culpa temporibus eligendi, quam quaerat dolorem ut nam, voluptate aperiam perferendis rerum adipisci minima fuga expedita quia delectus? Id expedita amet aliquid molestias!
        Ipsam sunt debitis optio nobis culpa commodi corporis recusandae dolor assumenda neque vel ipsum, possimus quasi esse ab quo quia quisquam natus perspiciatis in ex iste placeat! Sint, veritatis odit?
        </p>
      </section>
      <section ref={careerRef}>
        <h1>Career</h1>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptates? Tenetur quidem pariatur obcaecati magnam, consectetur laboriosam facere porro magni eligendi ab aut minima qui suscipit atque hic. Nobis, error.
        Aperiam maxime cum voluptates dolores ut odio ab officia sed, eos rerum. Earum cumque, harum nobis amet sed reiciendis dolores deserunt, tempore corporis corrupti nemo? Nihil delectus enim quos repudiandae.
        Iusto quibusdam animi ab rerum recusandae sapiente consequatur error, dolore at porro in minima aspernatur ratione magnam modi adipisci reprehenderit alias quod qui praesentium? Voluptatum suscipit optio velit culpa architecto!
        Eos facilis enim unde sequi? Corporis quisquam totam voluptates possimus fuga obcaecati doloribus illum in, dicta atque ab minus officiis, qui nostrum similique. Accusantium esse cum nisi aspernatur quaerat dolorem.
        Nulla quas necessitatibus aspernatur, ipsa esse nisi ipsam ullam quam, perspiciatis quo quia! Dolore, aperiam? Itaque animi consequatur alias porro natus doloribus ea commodi, officia recusandae! Voluptates ratione dolorum necessitatibus.
        Sit, aspernatur provident odit veritatis nihil dolor culpa temporibus eligendi, quam quaerat dolorem ut nam, voluptate aperiam perferendis rerum adipisci minima fuga expedita quia delectus? Id expedita amet aliquid molestias!
        Ipsam sunt debitis optio nobis culpa commodi corporis recusandae dolor assumenda neque vel ipsum, possimus quasi esse ab quo quia quisquam natus perspiciatis in ex iste placeat! Sint, veritatis odit?
        </p>
      </section>
    </div>
  )
}
