import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../../chunks/ssr.js";
const css = {
  code: ".outer-container.svelte-q3ts2u{width:100%;display:flex;align-items:center;justify-content:center}.new-log-container.svelte-q3ts2u{padding:2rem;display:flex;flex-direction:column;justify-content:center;font-weight:500;font-size:1.5rem}.form-group.svelte-q3ts2u{margin-bottom:1.5rem}.rating.svelte-q3ts2u{display:flex;align-items:center;justify-content:space-between}.range-input.svelte-q3ts2u{margin:5px 0;width:90%;height:1px}label.svelte-q3ts2u{display:block;margin-bottom:1rem}select.svelte-q3ts2u{width:100%;font-family:'Quicksand';font-size:1.5rem;padding:0px;background-color:inherit;border:0px}textarea.svelte-q3ts2u{font-family:'Quicksand';font-size:1.25rem;color:rgb(255, 255, 255);background-color:rgb(10, 10, 10, 0.8);padding:0.75rem;border-radius:0.4rem;border:1px solid #000}",
  map: null
};
function getLetterGrade(numGrade) {
  if (numGrade >= 98)
    return "A+";
  if (numGrade >= 95)
    return "A";
  if (numGrade >= 93)
    return "A-";
  if (numGrade >= 90)
    return "B+";
  if (numGrade >= 87)
    return "B";
  if (numGrade >= 85)
    return "B-";
  if (numGrade >= 82)
    return "C+";
  if (numGrade >= 79)
    return "C";
  if (numGrade >= 77)
    return "C-";
  if (numGrade >= 74)
    return "D+";
  if (numGrade >= 70)
    return "D";
  return "F";
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let grade;
  const questions = [
    {
      key: "learn",
      text: "What did you learn today?"
    },
    {
      key: "improve",
      text: "How did you improve today?"
    },
    {
      key: "generous",
      text: "How were you generous today?"
    },
    {
      key: "resourceful",
      text: "How were you persevering or resourceful today?"
    },
    {
      key: "craftsmanlike",
      text: "How were you craftsmanlike today?"
    }
  ];
  const rndmIdx = Math.floor(Math.random() * questions.length);
  questions[rndmIdx].key;
  let rating = 60;
  $$result.css.add(css);
  grade = getLetterGrade(rating);
  return `<div class="outer-container svelte-q3ts2u"><div class="new-log-container svelte-q3ts2u"><p>${escape((/* @__PURE__ */ new Date()).toDateString())}</p> <form method="POST"><div class="form-group svelte-q3ts2u" data-svelte-h="svelte-1be3brc"><label for="accomplished" class="svelte-q3ts2u">What did you accomplish today?</label> <textarea name="accomplished" id="accomplished" rows="5" cols="80" placeholder="Be specific" required class="svelte-q3ts2u"></textarea></div> <div class="form-group svelte-q3ts2u"><label for="answer" class="svelte-q3ts2u"><select name="question" id="question" class="svelte-q3ts2u">${each(questions, (question) => {
    return `<option${add_attribute("id", question.key, 0)}${add_attribute("value", question.key, 0)}>${escape(question.text)}</option>`;
  })}</select></label> <textarea name="answer" id="answer" rows="5" cols="80" placeholder="Be specific" required class="svelte-q3ts2u"></textarea></div> <div class="form-group svelte-q3ts2u"><label for="rating" class="svelte-q3ts2u" data-svelte-h="svelte-2qh5b6">How would you grade your effort and focus today?</label> <div class="rating svelte-q3ts2u"><input type="range" id="rating" name="rating" min="60" max="100" step="1" class="range-input svelte-q3ts2u"${add_attribute("value", rating, 0)}> <div>${escape(rating)} ${escape(grade)}</div></div></div></form></div> </div>`;
});
export {
  Page as default
};
