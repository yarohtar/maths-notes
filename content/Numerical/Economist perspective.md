Suppose we make $n$ products out of $m$ materials. 
We make $x_i$ of the $i$th product,
and to make $x=(x_1\dots x_n)$ products 
we need $h_j(x)$ of raw material $j$. 
We have $b_j$ raw materials. 
We earn $f(x)$.

So we want to maximise $f(x)$ s.t. $h(x)\leq b, x\geq 0$.

We are now offered a small amount of material $\epsilon=(\epsilon_1\dots\epsilon_m)$. 
How much should we pay for this?

Let the value function be $\phi(b)=\sup_{x\in X(b)}f(x)$
For small enough $\epsilon$ we have

$$\phi(b+\epsilon)-\phi(b)=\sum_{j=1}^m \frac{\partial\phi(b)}{\partial b_j} \epsilon_j$$
Now the amount we should pay shouldn't exceed $\nabla\phi(b)\epsilon$. 
Which is also $\lambda^T\epsilon$. 
We saw this happen in [[Analysis/Supporting hyperplane#Theorem (Gradient)]]

Note that if $h_j(x)<b_j$, 
then we are not willing to pay anything for that material. 
This corresponds to the [[Numerical/Complimentary Slackness]].

When someone is selling us the materials at price $\lambda$, 
and wants to buy the products later, 
they are maximising $\lambda^T(h(x)-b)-f(x)$,
where we can say that $x=x^*(\lambda)$, 
because we want to optimise our profits for $\lambda$. 
So they are actually solving the dual problem to ours. 
It turns out that if $\lambda$ is the supporting plane,
none of us has an incentive to change our strategies.