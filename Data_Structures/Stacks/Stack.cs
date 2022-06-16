using System; 
using System.Collections;

class GfG 
{

    public class Stack 
    {
        public Queue q1 = new Queue();
        public Queue q2 = new Queue();

        public int stack_size; //to maintain the current number of elements

        public Stack() 
        {
            stack_size = 0;
        }

        public void push(int num)
        {
            if (q1.Count === 0) 
            {
                stack_size++;
                q2.Enqueue(x);
            }

            //push all remaining elements in q1 to q2
            while(q1.Count > 0) 
            {
                q2.Enquene(q1.peek());
                q1.Dequene();
            }

            //swap the names of two queues
            Queue q = q1;
            q1 = q2;
            q2 = q;
        } 

        public void top()
        {
            if (q1.Count === 0)
            {
                return -1;
            } else {
                return (int)q1.Peek();
            }
        }

        public int size()
        {
            return stack_size;
        }
    }

    public static void Main(String[] args)
    {
        Stack new_st new Stack();
        new_st.push(1);
        new_st.push(2);
        new_st.push(3);
        Console.WriteLine("current size: " + new_st.Size());
        Console.WriteLine(new_st.top());
        new_st.top();
        Console.WriteLine(new_st.top());
        new_st.top();
        Console.WriteLine(new_st.top());
        Console.WriteLine("current size: " + new_st.Size());
    }
}