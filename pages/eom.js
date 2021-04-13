import styles from "../styles/eom.module.css"
import { Toolbar } from "../components/toolbar"

export const EOM = ({ employee }) => {
    
    return (
        <div className='page-container'>

        <Toolbar />
        
            <div className={styles.main}>
                <h1>Employee of the Month</h1>

                <div className={styles.employeeOfTheMonth}>
                    <h3>{employee.name}</h3>
                    <h6>{employee.position}</h6>
                    <img src={employee.image} alt="Employee Of The Month Image"/>
                    <p>{employee.description}</p>
                </div>
            </div>
        </div>
    )
}
export const getServerSideProps = async pageContext => {
    const apiRespone = await fetch("https://my-json-server.typicode.com/portexe/next-news/employeeOfTheMonth",);

    const employee = await apiRespone.json();

    return {
        props: {
            employee
        }
    }
}

export default EOM;