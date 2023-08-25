function ul(child: string): string {
  return `<ul>${child}</ul>`;
}

function ol(child: string): string {
  return `<ol>${child}</ol>`;
}

function makeLi(
  container: (child: string) => string,
  contents: string[]
): string {
  const liList = [];

  for (const content of contents) {
    liList.push(`<li>${content}</li>`);
  }

  return container(liList.join(''));
}

const htmlUL = makeLi(ul, ['월', '화', '수', '목', '금', '토', '일']);
const htmlOL = makeLi(ol, ['봄', '여름', '가을', '겨울']);

console.log(htmlUL);
console.log(htmlOL);
