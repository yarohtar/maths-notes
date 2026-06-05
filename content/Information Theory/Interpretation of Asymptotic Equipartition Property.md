Using notation from [[Information Theory/Asymptotic Equipartition Property]] definition.

Each string $x_{n,i}\in A^{n}$ has probability $p_{n,i}=P^{n}(x_{i})$ of occurring

The result of [[Information Theory/Random Probability of Random Variable]] $P^{n}(X_{1}^{n})$ is:
Choose one of the **probabilities** $p_{n,i}$ at random
(following the distribution of $X_{1}^{n}$)
i.e. choose $p_{n,i}$ with probability $p_{n,i}$

AEP says that this randomly chosen number is close to $2^{-nH}$ 
(with high probability).

In other words, most strings $x_{1}^{n}$ 
should have probability close to $2^{-nH}$.
These are called [[Information Theory/Typical Strings]].

There will usually be a lot of strings that are not typical.
We make no claims on whether they are more or less probable than $2^{-nH}$
However, seeing anything from the non typical set is improbable.
For example, consider $A=\{ 0,1 \}$ 
and $X_{n}$ are iid with $p_{0}=\frac{3}{4}$ and $p_{1}=\frac{1}{4}$.
We can find $H=2-\frac{3}{4}\log 3\approx 0.81$.
The string $0000\dots 0$ is the most probable individual string, 
but its not very "typical" (we expect to see a $3:1$ ratio)
Indeed, it's probability is $p_{n}=2^{-2n}\cdot 3^{n}$ which gives:
$$
-\frac{1}{n}\log p_{n} = 2 - \log 3 \approx 0.42
$$
and that is not close to $H$.
