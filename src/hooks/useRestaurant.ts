import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { restaurantFetcher } from 'apis/naver';

function useRestaurant(query: string, page: number) {
  const { data, error, isLoading } = useSWR(
    query ? { query, page } : null,
    restaurantFetcher
  );

  return { data, error, isLoading };
}

export default useRestaurant;
