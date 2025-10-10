[[Notes/Forms of linear programs]]
## Solving the linear program

[[Notes/Maximum of convex function]] is always at an [[Notes/Extreme point of convex set\|extreme point]] (of domain).

So if we found all extreme points and evaluated the function there, we should have our solution.

Consider a Linear program in standard form:
minimize $c^Tx$ such that $Ax=b$ and $x\geq 0$ where $A\in R^{m\times n}$ and $x\in R^n$.

We shall use a few assumptions:
- Assumption A: The rows of $A$ are linearly independent.
- Assumption B: Every set of $m$ columns of $A$ are linearly independent.
- Assumption C: All feasible [[Notes/Basic solutions (LP)\|basic solutions]] are non-degenerable i.e. they have exactly $m$ non-zero entries.

Select $B(1),\dots B(m)$ the non-zero entries in $x$ (do this in $n \choose m$ ways).
Set $B=[A_{B(1)} \dots A_{B(m)}]$.
Now take $x_B=B^{-1}b$.
Construct a basic solution from $x_B$ by adding $0$s.

Now using [[Notes/Basic solutions (LP)#Theorem\|BFS theorem]] we get the following algorithm:
1. Check all $n\choose m$ basic solutions
2. Filter out BFSs
3. Evaluate $c^Tx$ on the BFSs and output the best.

This is too slow! 
We can improve if we had a condition which guarantees us that we already found the minimum (like in [[Notes/First-order condition#Minimum\|convex function minimum]]). 

[[Notes/Optimality conditions in LPs]]

[[Notes/Simplex method]]
