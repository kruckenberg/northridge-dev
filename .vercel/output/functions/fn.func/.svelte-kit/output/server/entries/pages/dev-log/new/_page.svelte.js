import { c as create_ssr_component, e as escape, d as each, f as add_attribute } from "../../../../chunks/ssr.js";
const css = {
  code: ".outer-container.svelte-1q3r4eb{width:100%;display:flex;align-items:center;justify-content:center}.new-log-container.svelte-1q3r4eb{padding:2rem;display:flex;flex-direction:column;justify-content:center;font-weight:500;font-size:1.5rem}.form-group.svelte-1q3r4eb{margin-bottom:1.5rem}.rating.svelte-1q3r4eb{display:flex;align-items:center;justify-content:space-between}.range-input.svelte-1q3r4eb{margin:5px 0;width:90%;height:1px}label.svelte-1q3r4eb{display:block;margin-bottom:1rem}select.svelte-1q3r4eb{width:100%;font-family:'Quicksand';font-size:1.5rem;padding:0px;background-color:inherit;border:0px}textarea.svelte-1q3r4eb{font-family:'Quicksand';font-size:1.25rem;color:rgb(255, 255, 255);background-color:rgb(10, 10, 10, 0.8);padding:0.75rem;border-radius:0.4rem;border:1px solid #000}button.svelte-1q3r4eb{width:100%;font-family:'Quicksand';font-size:1.25rem;color:rgb(255, 255, 255);background-color:rgb(10, 10, 10, 0.8);padding:0.75rem;border-radius:0.4rem;border:1px solid #000}",
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
  return `<div class="outer-container svelte-1q3r4eb"><div class="new-log-container svelte-1q3r4eb"><p>${escape((/* @__PURE__ */ new Date()).toDateString())}</p> <form method="POST"><div class="form-group svelte-1q3r4eb" data-svelte-h="svelte-1be3brc"><label for="accomplished" class="svelte-1q3r4eb">What did you accomplish today?</label> <textarea name="accomplished" id="accomplished" rows="5" cols="80" placeholder="Be specific" required class="svelte-1q3r4eb"></textarea></div> <div class="form-group svelte-1q3r4eb"><label for="answer" class="svelte-1q3r4eb"><select name="question" id="question" class="svelte-1q3r4eb">${each(questions, (question) => {
    return `<option${add_attribute("id", question.key, 0)}${add_attribute("value", question.key, 0)}>${escape(question.text)}</option>`;
  })}</select></label> <textarea name="answer" id="answer" rows="5" cols="80" placeholder="Be specific" required class="svelte-1q3r4eb"></textarea></div> <div class="form-group svelte-1q3r4eb"><label for="rating" class="svelte-1q3r4eb" data-svelte-h="svelte-2qh5b6">How would you grade your effort and focus today?</label> <div class="rating svelte-1q3r4eb"><input type="range" id="rating" name="rating" min="60" max="100" step="1" class="range-input svelte-1q3r4eb"${add_attribute("value", rating, 0)}> <div>${escape(rating)} ${escape(grade)}</div></div></div> <button type="submit" class="svelte-1q3r4eb" data-svelte-h="svelte-1ou7dtz">Submit</button></form></div> </div>`;
});
export {
  Page as default
};
