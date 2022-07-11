import { observer } from "mobx-react-lite";

const Counter = observer((props: { store }) => {
  return (
    <>
      <table width={600}>
        <tbody>
          <tr>
            <td colSpan={4}>
              Counter: {props.store.count} and double: {props.store.double}
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={() => props.store.decrementCount()}>-1</button>
            </td>

            <td>
              <button onClick={() => props.store.incrementCount()}>+1</button>
            </td>

            {props.store.multiple_2 ? (
              <td>
                <button onClick={() => props.store.multiple_2()}>*2</button>
              </td>
            ) : null}

            <td>
              <button onClick={() => props.store.someAsync()}>
                Async Function
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
});

export default Counter;
