Given an inner product $<\cdot,\cdot>$ there is a unique set of monic orthogonal polynomials $\{p_k\}_{k=0}^\infty$ such that $\deg(p_k)=k$. 
We find them by the [[Notes/Gram-Schmidt process]], and uniqueness of $p_k$ obtained by contradiction and looking at roots.

### Three step recurrence
Consider an inner product s.t. $<xf,g>=<f,xg>$. Then we have a three-step recurrence:
$$p_{-1}(x)=0\quad\quad p_0(x)=1$$
$$p_{n+1}(x)=(x-\alpha_n)p_n(x)-\beta_np_{n-1}(x)$$
where
$$\alpha_n = {<p_n,xp_n>\over <p_n,p_n>}\quad\quad \beta_n={<p_n,p_n>\over <p_{n-1},p_{n-1}>}$$

## Least squares polynomial approximation
Given a function $f$, suppose we want to minimize $<f-p,f-p>$, where $p$ is a polynomial of degree $n$. We claim this is always:
$$p(x)=\sum_{k=0}^n{<f,p_k>\over <p_k,p_k>}p_k$$