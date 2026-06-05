Alice and Bob wish to agree on a secret key $k$.
Let $p$ be a large prime and $g$ a primitive root $\pmod{p}$
Alice chooses $\alpha \in \mathbb{Z}_{p-1}$ and sends $g^{\alpha}\pmod{p}$ to Bob.
Similarly Bob sends $g^{\beta}\pmod{p}$ to Alice for $\beta \in \mathbb{Z}_{p-1}$
Then both of them know the secret key $g^{\alpha \beta}$
### Conjecture
Finding $g^{\alpha \beta}$ from $g$, $g^{\alpha}$ and $g^{\beta}$ is essentially as difficult as solving the discrete logarithm problem.