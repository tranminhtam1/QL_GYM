// import LoginForm from '../components/auth/LoginForm'
// import RegisterForm from '../components/auth/RegisterForm'
// import DkkHForm from '../components/auth/DkKHForm'
// import { AuthContext } from '../contexts/AuthContext'
// import { useContext } from 'react'
// import {Redirect} from 'react-router-dom'
// import Spinner from 'react-bootstrap/Spinner'
import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Alert} from 'reactstrap'
// import { useHistory } from 'react-router-dom'

// import { AuthContext } from '../../contexts/AuthContext'
// import AlertMessage from '../layout/AlertMessage'
// import DKKHForm from '../components/auth/DkKHForm'
const trangchu = () => {
    // let history = useHistory()
    
    //     const { username, phonenumber,email } = registerKH
    //  const registerKH = async event => {
    //         event.preventDefault()
    //         if(phonenumber){
    //         //    setAlert({type:'danger',message:'Password khong khop'})
    //         //    setTimeout(()=>setAlert(null),5000)
    //         console.log("Sai roi")
    //            return
    //         }
    
    //         try {
    //             const registerData = await registerKH()
    //             if (!registerData.success) 
    //             {
    //                 console.log("HIHI")
    //                 // setAlert ({type:'danger', message:registerData.message})
    //                 // setTimeout(()=> setAlert(null),5000)
    
    //             }
    
    
    
        //     } catch (error) {
        //         console.log(error)
    
        //     }
    
    
        // }
        return (
       <>
       <nav  class="navbar navbar-expand-lg navbar-black bg-black">
           <div id="thanhtren" class="container">
           <a id="right"class="navbar-brand" href="#">DỊCH VỤ</a>
           <a id="right"class="navbar-brand" href="#">CÂU LẠC BỘ </a>
           <a id="right"class="navbar-brand" href="/dashboard">KHÓA TẬP </a>
           <a id="right"class="navbar-brand" href="/registerKH">TẬP THỬ MIỄN PHÍ </a>
           <a id="right"class="navbar-brand" href="https://www.facebook.com/ha.dat.921/">HỘI VIÊN </a>
         
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  {/* <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> 
    </ul>
  </div> */}
  
             <a id="right"  href="/register" >ĐĂNG KÝ   </a>
             <a id="right"  href="/login" >ĐĂNG NHẬP   </a>
             
    </div>
  
</nav>
       
            <Row className='landing2' style={{ marginRight: 0 }}>
           
                <Col className='landing2 text-center '>
                {/* <h1>KHÁM PHÁ TRUNG TÂM THỂ HÌNH GATEWAY GYM </h1>
                <h3>Với những dịch vụ cao cấp, đáp ứng mọi nhu cầu luyện tập và chăm sóc sức khỏe theo tiêu chuẩn 5 sao của giới thượng lưu, tham gia Hội Viên California Centuryon để tận hưởng những đặc quyền không giới hạn dành cho bạn ngay hôm nay!</h3>
     */}
                    {/* <Button
                    
                        variant='primary bg-dat btn-danger'
                        href='https://www.facebook.com/ha.dat.921/'
                        size='lg'
                    >
                        TÌM HIỂU THÊM
                    </Button> */}
                    {/* <p >
                    Don't have an account?
                    <Link to='/login'>
                        <Button variant='info' size='sm' className='btn-regis ml-5'>DangNhap</Button>
                    </Link>
                </p>
                <p >
                    Don't have an account?
                    <Link to='/register'>
                        <Button variant='info' size='sm' className='btn-regis ml-5'>Register</Button>
                    </Link>
                </p> */}
                {/* <p >
                Đăng Kí Khóa Tập Miễn Phí?
                <Link to='/registerKH'>
                    <Button variant='info' size='sm' Redirect ='/login'  className='btn-regis ml-5'>Đăng Kí Khóa Tập Miễn Phí</Button>

                </Link>
                
            </p> */}
            {/* <p >
                    Xem các khóa tập
                    <Link to='/dashboard'>
                        <Button variant='info' size='sm' className='btn-regis ml-5'>Xem ngay</Button>
                    </Link>
                </p> */}
                <br></br>
                <a id="chunoi"  href="/login" ><b>OFFICIALLY AMAZING</b>  <h4 id="chu"><b>THẦN THÁI CUỐN, HÚT SẮC VÓC ĐỈNH CAO</b></h4>
                <Button
                        id="nutdangky"
                        // href='https://www.facebook.com/ha.dat.921/'
                        
                    >
                       <b> ĐĂNG KÝ</b>
                    </Button>  </a> 
                </Col>
                {/* <div class="container" id="bgden">
                      <div class="row">
                          <div class="col-md-4">
                              <h1>CHÚNG TÔI LÀ ROVEL</h1>
                              <h4>Là thương hiệu về sức khỏe lớn nhất Việt Nam, California Fitness & Yoga được xây dựng để mang lại hạnh phúc và tạo ra những khoảnh khắc viên mãn cho bạn trong cuộc sống bằng việc cung cấp các dịch vụ phát triển sức khỏe thể chất, dinh dưỡng và tinh thần toàn diện.</h4>
                          </div>
                          <div class="col-md-4">
                          <img src="../assets/bg1.png"/>
                          </div>
                          <div class="col-md-4">ffff</div>
                      </div>
                      </div>   */}
            </Row> 
            
                
                </>
            )
            
    
           
            
        
        
        
        
     }
export default trangchu



