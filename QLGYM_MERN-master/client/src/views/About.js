import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const About = () => {
	return (
		<Row className='landing2' style={{ marginRight: 0 }}>
			<Col className='landing2 text-center '>
			<div class="container"  >
				<div class="row">
					<div  class="col-md-5"><h1 id="thongtinabout"> TRUNG TÂM THỂ HÌNH GATEWAY GYM </h1>
					<br></br>
			<h4 id="thongtinabout1">Với những dịch vụ cao cấp, đáp ứng mọi nhu cầu luyện tập <br></br> Chăm sóc sức khỏe theo tiêu chuẩn 5 sao <br></br>Tham gia Hội Viên California Centuryon để tận hưởng những đặc quyền không giới hạn!</h4></div>
				</div>
			</div>

				<Button
					variant='primary bg-dat btn-danger'
					href='https://www.facebook.com/ha.dat.921/'
					size='lg'
				>
					THÔNG TIN CHI TIẾT
				</Button>
			</Col>
		</Row>
		
	
	)
	
	
}

export default About