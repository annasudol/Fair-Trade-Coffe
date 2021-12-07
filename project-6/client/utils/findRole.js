const findRole =async(methods, account, role)=> {
  if(methods && account) {
    const method =methods[role];

    return method && method(account).call((err, res)=>{
        return res
    });
  }
}

export default findRole;