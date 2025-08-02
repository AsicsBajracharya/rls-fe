'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppSelector, useAppDispatch } from '@/lib/store';
import { increment, decrement, incrementByAmount } from '@/lib/slices/counterSlice';

export function Counter() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Redux Counter</CardTitle>
        <CardDescription>
          A simple counter using Redux Toolkit for state management
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-2xl font-bold text-center">{count}</div>
        <div className="flex gap-2">
          <Button 
            onClick={() => dispatch(decrement())}
            variant="outline"
            className="flex-1"
          >
            Decrease
          </Button>
          <Button 
            onClick={() => dispatch(increment())}
            className="flex-1"
          >
            Increase
          </Button>
        </div>
        <Button 
          onClick={() => dispatch(incrementByAmount(5))}
          variant="secondary"
          className="w-full"
        >
          Add 5
        </Button>
      </CardContent>
    </Card>
  );
} 