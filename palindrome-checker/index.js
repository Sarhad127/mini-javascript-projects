const input = document.getElementById('input')

function reverseString(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reverse = reverseString(value);
  if (value === reverse) {
    alert("palindrome!")
  } else {
    alert('nope')
  }
  input.value = "";
}

/*
split() delar upp strängen i en array [h,e,l,l,o]
reverse() gör ordningen på arrayen baklänges
join() sammanfogar elementen i arrayen till en ny sträng
*/