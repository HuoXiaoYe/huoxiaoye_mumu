import React, { useState, useMemo } from 'react'
import UpRefresh from "@/ui/components/upRefresh/upRefresh"
import "./style.less"

const UpRefreshWrap: React.FC<any> = () => {
    const [list, setList] = useState<number[]>(Array(10).fill(0).map((_, index) => index))
    const [isEnd, setIsEnd] = useState<boolean>(false)
    function loadMoreData() {
        setTimeout(() => {
            let last = list[list.length - 1];
            let newList = [...list, ...Array(10).fill(0).map((_, index) => last + 1 + index)];
            setList(newList);
            if (last >= 90) {
                setIsEnd(true)
            }
        }, 2000)
    }
    const Child = useMemo<React.ReactNode>(() => {
        return <UpRefresh isEnd={isEnd} loadMore={loadMoreData}>
            {
                list.map(item => {
                    return (
                        <div key={item} className="list-item">
                            {item}
                        </div>
                    )
                })
            }
        </UpRefresh>

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list,isEnd])
    return (
        <div className="up-refresh-wrap">
            {Child}
        </div>
    )
}

export default UpRefreshWrap