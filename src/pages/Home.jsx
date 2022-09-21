import React,{useState,useEffect} from 'react'
import Nav from '../component/navbar/Nav'
import ModalDiv from '../component/modal/Modal'
import { Frown } from 'react-feather';
import SingleNote from '../component/singleNote/SingleNote';
const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => { 
        setData(JSON.parse(localStorage.getItem('myNotes')) || [])

    }, [])
    
    const [showModal,setShowModal] = useState(false)
    const refresher = () => { 
        setData(JSON.parse(localStorage.getItem("myNotes")) || []);
    }
  return (
    <>
        <Nav setShowModal={setShowModal} data={data} setData={setData}  refresher={refresher}/>
        {showModal && 
        <ModalDiv showModal={ showModal } setShowModal={setShowModal}  refresher={refresher}/>}
      {/** notes */}
        <div className='row justify-content-between mx-0 p-5'>
            {!data.length ?
                <h1 className='text-center display-1 fw-light text-secondary my-5'>
                    <Frown size={100} />No Notes.Create new one.
                </h1>
                :
                data.map((item, i) => (
                    <SingleNote key={item.id} item={item} refresher={refresher}/>
                ))
            }

        </div>
    </>
  )
}

export default Home