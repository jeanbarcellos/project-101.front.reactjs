import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import config from '../config'
import { closedLoadingDialog, openedLoadingDialog } from 'store/app/dialogSlice'
import { showErrorMessage, showSuccessMessage } from 'store/app/messageSlice'
import * as Api from 'api/categoriesApi'

const reducerName = `${config.reducerKey}/categories`

const categoriesAdapter = createEntityAdapter()

// Initial State

const initialState = categoriesAdapter.getInitialState({})

// Thunk functions

export const fetchCategories = createAsyncThunk(`${reducerName}/fetchCategories`, async (args, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.getCategories()

    dispatch(showSuccessMessage('Categorias carregadas com sucesso!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Erro ao obter categorias!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const insertCategory = createAsyncThunk(`${reducerName}/insertCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.insertCategory(category)

    dispatch(showSuccessMessage('Categoria adicionada com sucesso!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Erro ao adicionar categoria!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const updateCategory = createAsyncThunk(`${reducerName}/updateCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    const response = await Api.updateCategory(category)

    dispatch(showSuccessMessage('Categoria editada com sucesso!'))

    return response.data
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Erro ao editar categoria!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

export const deleteCategory = createAsyncThunk(`${reducerName}/deleteCategory`, async (category, { dispatch }) => {
  try {
    dispatch(openedLoadingDialog())

    await Api.deleteCategory(category.id)

    dispatch(showSuccessMessage('Categoria excluída com sucesso!'))

    return category.id
  } catch (error) {
    dispatch(showErrorMessage(error.message || 'Erro ao excludir categoria!'))
    throw error
  } finally {
    dispatch(closedLoadingDialog())
  }
})

// Reducer

const categoriesSlice = createSlice({
  name: reducerName,
  initialState: initialState,
  reducers: {
    resetCategories(state, action) {
      categoriesAdapter.removeAll(state)
    }
  },
  extraReducers: {
    [fetchCategories.fulfilled]: categoriesAdapter.setAll,
    [insertCategory.fulfilled]: categoriesAdapter.addOne,
    [updateCategory.fulfilled]: categoriesAdapter.upsertOne,
    [deleteCategory.fulfilled]: categoriesAdapter.removeOne
  }
})

// Actions

export const { resetCategories } = categoriesSlice.actions

// Selectors

export const { selectAll: selectAllCategories } = categoriesAdapter.getSelectors(
  state => state[config.reducerKey].categories
)

export default categoriesSlice.reducer
