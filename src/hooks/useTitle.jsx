import { useEffect } from 'react';
const useTitle = title => {
    useEffect(() => {
        document.title = `MixxStore | ${title}`;
    },[title])
}

export default useTitle;