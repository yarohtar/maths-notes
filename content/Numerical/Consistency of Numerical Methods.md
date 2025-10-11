Suppose we have a numerical method of the form
$$
u^{n+1}=A_hu^{n}
$$
where the superscript represents the time steps (of size $k$)
Have an exact solution $\hat{u}$.
The method is consistent if:
$\hat{u}^{n+1}=A_{h}\hat{u}^n+\eta^n$ and $\lVert \eta^n \rVert=O(k^2)$.
$\eta^n$ is called the local truncation error.
