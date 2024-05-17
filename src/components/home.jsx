import sneaker1 from '../assets/sneaker1_keogh1.jpg'
import sneaker2 from '../assets/sneaker2_hqerll.jpg'
import sneaker3 from '../assets/sneaker3_izl60q.jpg'
import sneaker4 from '../assets/sneaker_4_jucxod.jpg'
import cld from '../assets/cld-sample-5.jpg'


const Home = () => {

    return(
        
        <>
            <div className="sneakers">
                <div className="container1">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <img src={sneaker4} alt="" style={{width:"100%"}}/>
                        </div>
                        <div className="col-12 col-md-6 fall">
                            <p className='text-warning'>INCREASE COMPANY</p>
                            <h2>Fall Limited Edition Sneaker</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, fuga natus at quibusdam vero numquam reiciendis et facilis error! Quia nam illo quis error optio voluptas sint perspiciatis sit adipisci.</p>
                            <div className="pay">
                            <h5>$125.00</h5>
                            <button type="button" className="btn discount">50%</button>
                            </div>
                            <p>$250</p>
                             
                            <div className="joint">
                            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                                <button type="button" className="btn">-</button>
                                <button type="button" className="btn special">0</button>
                                <button type="button" className="btn">+</button>
                            </div>
                            <div className="add">
                                <button type="button" class="btn"> <i class="bi bi-cart3"></i> Add to cart</button>
                            </div>
                            </div>
                        </div>


                        
                    </div>
                </div>
            </div>

            <div className="container1">
            <div className="row">
                <div className="col-12 cool">
                    <img src={sneaker1} alt="" style={{width:"90px"}}/>
                    <img src={sneaker2} alt="" style={{width:"90px"}}/> 
                    <img src={sneaker3} alt="" style={{width:"90px"}}/>
                    <img src={cld} alt="" style={{width:"90px"}}/>  
                </div>
            </div>
            </div>
        </>
    )
}

export default Home