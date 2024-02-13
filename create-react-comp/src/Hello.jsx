function Hello() {

  let myName = 'Amit';
  let number = 456;
  let fullName = () => {
    return 'Amit Pandey'
  }

  return <p>
    MessageNo: {number} i am your master {fullName()}
  </p>
}

export default Hello;