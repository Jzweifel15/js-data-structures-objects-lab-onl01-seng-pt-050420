// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(obj, key, value)
{
  const newDriver = {...obj};
  newDriver[key] = value;
  return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) 
{
  return obj[key] = value;
}

function deleteFromDriverByKey()
{
  
}

function destructivelyDeleteFromDriverByKey()
{
  
}