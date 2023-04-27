// 정주현

import { useEffect, useState } from "react";
import { useAxiosGet } from "../../CustomHooks";
import styles from "./Network.module.css";
import NetworkProfile from "./NetworkProfile";
import NetworkFilter from "./NetworkFilter";
const host = import.meta.env.VITE_SERVER_HOST;

function Network() {
  const { data, error, loading } = useAxiosGet(`${host}/dummy/network`);
  const [complete, setComplete] = useState(false);
  const [visibleData, setVisibleData] = useState([]);
  const [listPrev, setListPrev] = useState(0);
  const [listCur, setListCur] = useState(30);
  const [sortBy, setSortBy] = useState([]); // array로 수정

  useEffect(() => {
    if (data) {
      setVisibleData(data.slice(0, listCur));
      setComplete(true);
    }
  }, [data, listCur]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <div className={styles.networkCenterFrame}>
        <NetworkFilter />
        <div className={styles.networkContainer}>
          {visibleData.map((user, idx) => {
            {
              /* 라우터 설정 필요 */
            }
            return (
              <NetworkProfile
                name={user.name}
                email={user.email}
                description={user.description}
                profileUrl={`/network/${user.id}`}
                key={idx}
              />
            );
          })}
        </div>
        {complete && visibleData.length < data.length && (
          <button
            className={styles.moreData}
            onClick={() => {
              setListPrev(listCur);
              setListCur(listCur + 30);
            }}
          >
            More
          </button>
        )}
      </div>
    </>
  );
}

export default Network;
