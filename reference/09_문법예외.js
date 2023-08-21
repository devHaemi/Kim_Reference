function doException() {
  throw new Error('오류가 발생했습니다.');
}

function noException() {
  return true;
}

function callException(type) {
  if (type === 'do') {
    doException();
  } else {
    noException();
  }
}

function main() {
  try {
    callException('do');
  } catch (error) {
    console.log(error);
  } finally {
    console.log('done');
  }
}

main();
