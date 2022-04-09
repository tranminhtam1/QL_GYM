import Button from 'react-bootstrap/Button'
import playIcon from '../../assets/play-btn.svg'
import editIcon from '../../assets/pencil.svg'
import deleteIcon from '../../assets/trash.svg'
import { PostContext } from '../../contexts/PostContext'
import { AuthContext } from '../../contexts/AuthContext'
import { useContext, useState } from 'react'



const ActionButtons = ({ url, _id,  }) => {
	
	
	const { deletePost, findPost, setShowUpdatePostModal } = useContext(
		PostContext
	)
	
	const {authState: {user: { username, roleid }}} = useContext(AuthContext)

	const choosePost = postId => {
		findPost(postId)
		setShowUpdatePostModal(true)
	}
	 
	


	if(roleid == 1)
	
	return (
		<>	
			<Button className='post-button' href={url} target='_blank'>
				<img src={playIcon} alt='play' width='32' height='32' />
			</Button>
			<Button className='post-button' onClick={choosePost.bind(this, _id)}>
				<img src={editIcon} alt='edit' width='24' height='24' />
			</Button>
			<Button className='post-button' onClick={deletePost.bind(this, _id)}>
				<img src={deleteIcon} alt='delete' width='24' height='24' />
			</Button>
		</>
	)
	
	else
	
	{
		return(<>
		
		         
				<div id ="demo">Đăng kí khóa tập ngay!</div>
				<Button type="button" >
					Đăng Kí Khóa Tập
				</Button>

			

				
			
				
				</>


				
		
		
		)
		

		
		};
		
	

	
	
}

export default ActionButtons