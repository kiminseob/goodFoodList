import useSWR from 'swr';
import { summaryFetcher } from 'apis/naver';

function useSummary(id: number) {
  const { data, error, isLoading } = useSWR(`/summary/${id}`, summaryFetcher);

  return { summary: data, isLoading };
}

export default useSummary;
