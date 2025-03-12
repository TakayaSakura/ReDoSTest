const { detectReDoS } = require("./detectReDoS");

// 脆弱性あり（217行目以降は脆弱性なし）適宜コメントアウトする
test("", () => {
  const node = { value: /(a*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|a)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a*a*/ };
  expect(detectReDoS(node)).toBe(true);
});

test("", () => {
  const node = { value: /(a*)*a/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|a)*a/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a*a*a/ };
  expect(detectReDoS(node)).toBe(true);
});

test("", () => {
  const node = { value: /(a*)*b/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /area*a*b/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /aa((ab)*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|a)*b/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a*a*b/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /ttye(ab|cd|cd)+/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(qi|qq|qqi|qi)+/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a*a*b)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a(a*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a(a*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /aaaa(a*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|b|b)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(ab|bb|bb)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(aba|bab|aba)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|b|b)*aa/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(ab|bb|bb)*aba/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(aba|bab|aba)*bcbz/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /aakc(a|b|b)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /avks(ab|bb|bb)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /aa(aba|bab|aba)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|b|b)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(ab|bb|bb)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(aba|bab|aba)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a(ab|bb|b)*a/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a((ab)*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(ab|bb|b)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /((ab)*)*aab/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /aa(a*)*abcd/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a*)*a((ab)*)*abc/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a*)*(a*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|a)*(abc)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a*a*(aba)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(abc)*(a*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|a)*(a*a*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a*)*a*a*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a(ab*)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(ab|bb|b)*a*a*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /aaaagad(a*)(bc)*a*a*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /avks(ab|bb|bb)+/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /aa(aba|bab|aba)+/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|b|b)+/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(ab|bb|bb)+/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(aba|bab|aba)+/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a(ab|bb|b)+a/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a*)+(a+)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /(a|a)+(abc)*/ };
  expect(detectReDoS(node)).toBe(true);
});
test("", () => {
  const node = { value: /a*a+(aba)*/ };
  expect(detectReDoS(node)).toBe(true);
});

//脆弱性なし
test("", () => {
  const node = { value: /a/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aaabd/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|b)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(ab|aaab)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abb|baba)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc|defg*)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc*|defg+)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc|defg*)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|b)*aa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(ab|aaab)*ab/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abb|baba)*qw/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc|defg*)ab*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /abc|defg(ab)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc*|defg+)aba*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc|defg*)a*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aab(a|b)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ree(ab|aaab)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abc*|defg+)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aaaaaaaa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /pba(a|b)*aaa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ape(ab|aaab)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abb|baba)*a*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aaa(abc|defg*)bcs/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc*aa|defg+aa)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /qe(abc|defg*)een/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ab*aaqw/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|b)aa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(ab|aaab)ab/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abb|baba)*qw/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /qqq(aabc|defg*)ab*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abc*|defg+)aba*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /cxc(abc|defg*)a*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aab(a|b)*sdd/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ree(ab|aaab)*aaaa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abc*|defg+)awfd/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|b)+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(ab|aaab)+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc*|defg+)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc+|defg+)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc+|defg*)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|b)+aa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(ab+|aaab)+ab/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abb|baba)+qw+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc|defg+)ab*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /abc|defg(ab)+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc+|defg+)aba+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc|defg+)a+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aab(a|b)+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ree(ab|aaab)+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abc*|defg+)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /pba(a|b)+aaa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ape(ab|aaab)+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abb|baba)+a*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aaa(abc|defg+)bcs/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc+aa|defg+aa)/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /qe(abc|defg+)een/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ab+aaqw/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|b)aa+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /qe+(abc+|defg+)ear+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(ab|aaab)ab+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abb|baba)*qw/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /qqq(aabc|defg+)ab+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abc+|defg+)aba*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /cxc(abc+|defg*)a+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aab(a|b)+sdd/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ree(ab|aaab)+aaaa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abc+|defg+)awfd/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /a(ab)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /a+(ab)*/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|a|a)qwpo/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(aaa|b|a)qq/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /abc(abc|abc|abc)abc/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ab(aba|bab|ab)+ab/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(aaa|b|a)qq/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(ab|abb|abbb)aldkf/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /whyaa(aaa|b|a)q/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|a|a)qwpo+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(aaa|b|a)qq+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /abc(abc|abc+|abc*)abc+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /ab+(aba|bab|ab)+ab/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa*(aaa|b|a)qq+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(ab|abb|abbb+)aldkf/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /whyaa(aaa|berserq|aaa)q/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|a)aqua/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /neet(jdsakl)+/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(a|aa)aaa/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /qweqwe+qwe/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /aa(abc+aa|defg+aa)casdv/ };
  expect(detectReDoS(node)).toBe(false);
});
test("", () => {
  const node = { value: /(abc|defg+)/ };
  expect(detectReDoS(node)).toBe(false);
});
