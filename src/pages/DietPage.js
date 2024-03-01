import DietInfoText from "../components/DietInfoText";
import DietInfoFrames from "../components/DietInfoFrames";
import FrameComponent1 from "../components/FrameComponent1";
import "./DietPage.css";

const DietPage = () => {
  return (
    <div className="diet-page">
      <DietInfoText />
      <div className="diet-text">
        <h1 className="all-about-diet">{`ALL ABOUT DIET `}</h1>
      </div>
      <DietInfoFrames />
      <div className="recommended-diet-for-childrens-wrapper">
        <h2 className="recommended-diet-for">
          RECOMMENDED DIET FOR CHILDRENS AND TEENAGERS
        </h2>
      </div>
      <FrameComponent1 />
      <section className="general-diet-plan-container">
        <p className="general-diet-plan">
          {" "}
          General DIET plan TO MAINTAIN LOW AND AVERAGE BMI
        </p>
        <p className="breakfast">Breakfast:</p>
        <ol className="option-1">
          <li className="option-11">
            <span className="option-12">Option 1:</span>
          </li>
        </ol>
        <ul className="whole-grain-oats-or-poha-flat">
          <li className="whole-grain-oats-or-poha-flat1">
            <span className="whole-grain-oats">
              Whole grain oats or poha (flattened rice) with vegetables.
            </span>
          </li>
          <li className="a-cup-of-skimmed-milk-or-butte">
            <span className="a-cup-of">
              A cup of skimmed milk or buttermilk.
            </span>
          </li>
          <li className="a-small-bowl-of-fresh-fruits">
            <span className="a-small-bowl">
              A small bowl of fresh fruits (like papaya or berries).
            </span>
          </li>
        </ul>
        <ol className="option-2">
          <li className="option-21">
            <span className="option-22">Option 2:</span>
          </li>
        </ol>
        <ul className="whole-wheat-toast-with-a-sprea">
          <li className="whole-wheat-toast-with-a-sprea1">
            <span className="whole-wheat-toast">
              Whole wheat toast with a spread of peanut butter.
            </span>
          </li>
          <li className="a-boiled-egg-or-a-serving-of-l">
            <span className="a-boiled-egg">
              A boiled egg or a serving of low-fat yogurt.
            </span>
          </li>
          <li className="a-piece-of-fruit-apple-or-ban">
            <span className="a-piece-of">
              A piece of fruit (apple or banana).
            </span>
          </li>
        </ul>
        <p className="mid-morning-snack">Mid-Morning Snack:</p>
        <ul className="a-handful-of-nuts-almonds-wa">
          <li className="a-handful-of-nuts-almonds-wa1">
            <span className="a-handful-of">
              A handful of nuts (almonds, walnuts, or pistachios).
            </span>
          </li>
          <li className="a-cup-of-green-tea-or-black-co">
            <span className="a-cup-of1">
              A cup of green tea or black coffee (without added sugar).
            </span>
          </li>
        </ul>
        <p className="lunch"> Lunch:</p>
        <ol className="option-13">
          <li className="option-14">
            <span className="option-15">Option 1:</span>
          </li>
        </ol>
        <ul className="brown-rice-or-quinoa-with-a-po">
          <li className="brown-rice-or-quinoa-with-a-po1">
            <span className="brown-rice-or">
              Brown rice or quinoa with a portion of grilled chicken or fish.
            </span>
          </li>
          <li className="mixed-vegetable-salad-with-oli">
            <span className="mixed-vegetable-salad">
              Mixed vegetable salad with olive oil dressing.
            </span>
          </li>
          <li className="dal-lentils-or-legumes">
            <span className="dal-lentils-or">Dal (lentils) or legumes.</span>
          </li>
        </ul>
        <ol className="option-23">
          <li className="option-24">
            <span className="option-25">Option 2:</span>
          </li>
        </ol>
        <ul className="roti-whole-wheat-bread-with">
          <li className="roti-whole-wheat-bread-with1">
            <span className="roti-whole-wheat">{`Roti (whole wheat bread) with a serving of lean `}</span>
          </li>
        </ul>
        <p className="protein-tofu-paneer">
          {" "}
          protein (tofu, paneer, or legumes).
        </p>
        <ul className="mixed-vegetable-curry-a-small">
          <li className="mixed-vegetable-curry">
            <span className="mixed-vegetable-curry1">
              Mixed vegetable curry.
            </span>
          </li>
          <li className="a-small-bowl-of-curd">
            <span className="a-small-bowl1">A small bowl of curd.</span>
          </li>
        </ul>
        <p className="afternoon-snack">Afternoon Snack:</p>
        <ul className="a-bowl-of-sprouts-or-a-fruit-s">
          <li className="a-bowl-of-sprouts-or-a-fruit-s1">
            <span className="a-bowl-of">
              A bowl of sprouts or a fruit salad.
            </span>
          </li>
          <li className="herbal-tea-or-a-glass-of-butte">
            <span className="herbal-tea-or">
              Herbal tea or a glass of buttermilk.
            </span>
          </li>
        </ul>
        <p className="dinner">Dinner:</p>
        <ol className="option-16">
          <li className="option-17">
            <span className="option-18">Option 1:</span>
          </li>
        </ol>
        <ul className="grilled-or-baked-fish-or-chick">
          <li className="grilled-or-baked-fish-or-chick1">
            <span className="grilled-or-baked">
              Grilled or baked fish or chicken.
            </span>
          </li>
          <li className="quinoa-or-brown-rice">
            <span className="quinoa-or-brown">Quinoa or brown rice.</span>
          </li>
          <li className="steamed-vegetables-or-sauted">
            <span className="steamed-vegetables-or">
              Steamed vegetables or sautéed greens.
            </span>
          </li>
        </ul>
        <ol className="option-26">
          <li className="option-27">
            <span className="option-28">Option 2:</span>
          </li>
        </ol>
        <ul className="lentil-soup-dal-with-a-side">
          <li className="lentil-soup-dal-with-a-side1">
            <span className="lentil-soup-dal">
              Lentil soup (dal) with a side of steamed brown rice.
            </span>
          </li>
          <li className="stir-fried-or-sauted-vegetabl">
            <span className="stir-fried-or-sauted">
              Stir-fried or sautéed vegetables with minimal oil.
            </span>
          </li>
        </ul>
        <p className="before-bed">Before Bed:</p>
        <ul className="a-glass-of-warm-milk-or-chamom">
          <li className="a-glass-of-warm-milk-or-chamom1">
            <span className="a-glass-of">
              A glass of warm milk or chamomile tea.
            </span>
          </li>
        </ul>
        <p className="general-tips">General Tips:</p>
        <ol className="stay-hydrated">
          <li className="stay-hydrated1">
            <span className="stay-hydrated2">Stay Hydrated:</span>
          </li>
        </ol>
        <ul className="drink-plenty-of-water-througho">
          <li className="drink-plenty-of-water-througho1">
            <span className="drink-plenty-of">
              Drink plenty of water throughout the day.
            </span>
          </li>
        </ul>
        <ol className="limit-processed-foods">
          <li className="limit-processed-foods1">
            <span className="limit-processed-foods2">
              Limit Processed Foods:
            </span>
          </li>
        </ol>
        <ul className="reduce-the-intake-of-processed">
          <li className="reduce-the-intake-of-processed1">
            <span className="reduce-the-intake">
              Reduce the intake of processed and sugary foods.
            </span>
          </li>
        </ul>
        <ol className="portion-control">
          <li className="portion-control1">
            <span className="portion-control2">Portion Control:</span>
          </li>
        </ol>
        <ul className="be-mindful-of-portion-sizes-to">
          <li className="be-mindful-of-portion-sizes-to1">
            <span className="be-mindful-of">
              Be mindful of portion sizes to avoid overeating.
            </span>
          </li>
        </ul>
        <ol className="regular-physical-activity">
          <li className="regular-physical-activity1">
            <span className="regular-physical-activity2">
              Regular Physical Activity:
            </span>
          </li>
        </ol>
        <ul className="include-regular-exercise-in-yo">
          <li className="include-regular-exercise-in-yo1">
            <span className="include-regular-exercise">
              Include regular exercise in your routine to complement your diet.
            </span>
          </li>
        </ul>
        <ol className="variety-and-moderation">
          <li className="variety-and-moderation1">
            <span className="variety-and-moderation2">
              Variety and Moderation:
            </span>
          </li>
        </ol>
        <ul className="aim-for-a-variety-of-nutrient-">
          <li className="aim-for-a-variety-of-nutrient-1">
            <span className="aim-for-a">
              Aim for a variety of nutrient-dense foods, and practice
              moderation.
            </span>
          </li>
        </ul>
        <p className="p"> </p>
      </section>
    </div>
  );
};

export default DietPage;
