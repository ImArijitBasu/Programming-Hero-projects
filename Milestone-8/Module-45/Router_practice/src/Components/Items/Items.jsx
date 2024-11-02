import { useLoaderData } from "react-router-dom";

const Items = () => {
    const datas = useLoaderData();
    console.log(datas);
    const Data = datas.categories;
    console.log(Data);
  return (
    <div className="mt-20 border">
      <div className="flex justify-center items-center">
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">🤡</div>
          <div className="swap-off">🙂</div>
        </label>
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">🤡</div>
          <div className="swap-off">🙂</div>
        </label>
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">🤡</div>
          <div className="swap-off">🙂</div>
        </label>
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">🤡</div>
          <div className="swap-off">🙂</div>
        </label>
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">🤡</div>
          <div className="swap-off">🙂</div>
        </label>
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">🤡</div>
          <div className="swap-off">🙂</div>
        </label>
        <label className="swap swap-flip text-9xl">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" />

          <div className="swap-on">🤡</div>
          <div className="swap-off">🙂</div>
        </label>
      </div>
      {/* items container  */}
      <div className="">
        {
            Data.map(data=> <p>{data.strCategory}</p>)
        }
      </div>
    </div>
  );
};

export default Items;
