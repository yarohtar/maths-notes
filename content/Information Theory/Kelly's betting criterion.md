For a long sequence of bets, maximise the expectation of $\log$s.

Kelly interpreted gambling as a [[Information Theory/Communication Channel]] 
where the gambler receives faulty information about who is going to win. 
### Betting
Every day at noon you make a bet.
You give your friend $k$ pounds and they flip a coin
1. if it lands on heads, you receive $ku$ pounds
2. if it lands on tails, you receive $0$ pounds

The coin lands on heads with probability $p$
What proportion of your wealth should you bet each day in order to remain in the game long term?

Let $w$ be the proportion of bet you are gambling
Let $Z_{n}$ be your wealth after $n$ days.
Then
$$
Z_{n+1}=Z_{n}Y_{n+1}
$$
where
$$
Y_{n+1}=\begin{cases}
uw + (1-w)  &  (n+1)\text{-th toss is a head} \\
1-w & \text{otherwise}
\end{cases}
$$
Apply [[Probability/Weak Law of Large Numbers]]
$$
P\left( \left\lvert  \frac{1}{n} \log Z_{n}-E(\log Y)  \right\rvert >\epsilon \right)\to 0
$$
So to maximise $\log Z_{n}$ we maximise 
$$
E(\log Y)=p\log(uw+(1-w))+(1-p)\log(1-w)=f(w)
$$
Then
$$
f'(w)=\frac{(pu-1)-(u-1)w}{((u-1)w+1)(1-w)}
$$
If $u<1$ don't bet. 
Assume $u>1$.
If $pu\leq 1$ then $f(w)$ is decreasing for $w\geq 0$ so don't bet.
If $pu>1$, take maximum at $w_{0}=\frac{up-1}{u-1}$.

