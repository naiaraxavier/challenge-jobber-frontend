import { useFormModalContext } from "../hooks/useFormModalContext";
import { CreateUpdateModal } from "../components/form-modal";
import { CardJob } from "../components/card-job";
import { Loading } from "../components/loading";
import { Job } from "../interfaces/interfaces";
import { Header } from "../components/header";
import { Button } from "../components/button";
import { Footer } from "../components/footer";
import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { Plus } from "lucide-react";
import "../css/home-page.css";

export const HomePage = () => {
  const { handleRegistrationModal, isFormOpen } = useFormModalContext();
  const { data: jobs, error, isLoading, get, del, setData } = useApi();
  const [idJob, setIdJob] = useState<number | undefined>(undefined);

  useEffect(() => {
    get("/api/jobs/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Atualiza a lista local de trabalhos
  const updateJobs = (updatedJob: Job) => {
    setData((prevJobs) =>
      prevJobs
        ? prevJobs.map((job) => (job.id === updatedJob.id ? updatedJob : job))
        : [updatedJob]
    );
  };

  const addJob = (newJob: Job) => {
    setData((prevJobs) => (prevJobs ? [...prevJobs, newJob] : [newJob]));
  };

  // Deleta um job
  const handleDelete = async (id: number) => {
    try {
      await del(`/api/jobs/${id}/`);
      setData(jobs ? jobs.filter((job) => job.id !== id) : null);
    } catch (err) {
      console.error("Erro ao deletar", err);
    }
  };

  // Edita um job
  const handleEdit = (id: number) => {
    setIdJob(id);
  };

  return (
    <>
      <Header />

      <main className="main-content">
        <div className="main-content__container">
          <div className="main-content__header">
            <h2>Lista de trabalhos</h2>
            <Button size="1" onClick={handleRegistrationModal}>
              <Plus size={18} strokeWidth={3} />
              Cadastrar trabalho
            </Button>
          </div>
        </div>

        <div className="main_content__cards">
          {isLoading ? (
            <Loading />
          ) : error ? (
            <p className="error">{error}</p>
          ) : jobs?.length === 0 ? (
            <p className="no-jobs">Atualmente, não há trabalhos cadastrados.</p>
          ) : (
            <>
              <div className="wrapper-title">
                <ul className="main-content__title">
                  <li>Título</li>
                  <li>Descrição</li>
                  <li>Criado em</li>
                </ul>
              </div>
              {jobs?.map(
                (job) =>
                  job?.id && (
                    <CardJob
                      key={job.id}
                      job={job}
                      onDelete={handleDelete}
                      handleEdit={handleEdit}
                    />
                  )
              )}
            </>
          )}
        </div>

        {/* Formulário de Criar/Editar um Job */}
        {isFormOpen && (
          <CreateUpdateModal
            idJob={idJob}
            updateJobs={updateJobs}
            addJob={addJob}
          />
        )}
      </main>

      <Footer />
    </>
  );
};
