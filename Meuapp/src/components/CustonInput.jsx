import styles from'./CustonInput.module.css'

function CustonInput(props){
    const {type,placeholder} = props
    return(
        <input className={styles.CustonInput} type={type}
            placeholder={placeholder}>
        </input>
    )
}

export default CustonInput